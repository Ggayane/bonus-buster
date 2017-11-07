import React, {Component} from 'react';
require("../libs/pixi.js");
const TRAVISO = require("../libs/traviso.dev.js");

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
        this.setup = this.setup.bind(this);
    }

    setupTraviso() {
        ////// Here, we initialize the pixi application
        const {innerWidth, innerHeight} = window;
        console.log(innerWidth, innerHeight);
        this.pixiRoot = new PIXI.Application(innerWidth, innerHeight, { backgroundColor : 0x6BACDE });
        // add the renderer view element to the DOM
        document.body.appendChild(this.pixiRoot.view);
        ////// Here, we create our traviso instance and add on top of pixi
        // engine-instance configuration object
        PIXI.loader
        .add([
          "../assets/assets_map.png",
          "../assets/btn_zoomIn.png",
          "../assets/assets_characters.png",
          "src/core/mapData.xml",
          "../assets/images/cover.jpg",
          "../assets/images/loader.gif"
        ])
        .on("progress", this.loadProgressHandler)
        .load(this.setup);
        
    }

    loadProgressHandler() {
        return (
            <div className="full-container loader">
                <img src="../assets/images/loader.gif" />
                <i className="text">Loading...</i>
            </div>
        )
    }

    setup() {
        const instanceConfig = {
            mapDataPath : "src/core/mapData.xml", // the path to the xml file that defines map data, required
            assetsToLoad : ["../assets/assets_map.json", "../assets/assets_characters.json"] // array of paths to the assets that are desired to be loaded by traviso, no need to use if assets are already loaded to PIXI cache, default null
        };

        const engine = TRAVISO.getEngineInstance(instanceConfig);
        this.pixiRoot.stage.addChild(engine);
        // debugger;
        setTimeout(() => {
            this.setState({loading: false});
        }, 3000);
    }

    componentDidMount() {
        this.setupTraviso();
    }

    render() {
        return this.state.loading ? this.loadProgressHandler() : null;
    }
}
export default Game;
