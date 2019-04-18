
/**
 * Defines a single CAN bus frame.
 * @class canbus.frame
 * @constructor
 * @author danyocom/nodeLAWICEL
 * @param {Number} id Identifier of CAN frame
 */
function frame(id) {
    /**
     * Identifier of frame (Extended = 29bit, Standard=11bit)
     * @property id
     * @type Number
     */
    this.id = id;

    /**
     * Data Length Code (DLC) of frame
     * @property dlc
     * @default 0
     * @type Number
     */
    this.dlc = 0;

    /**
     * Timestamp (DLC) of frame
     * @property dlc
     * @default 0
     * @type Number
     */
    this.timestamp = undefined;

    /**
     * Frame data
     * @property data
     * @type Array
     */
    this.data = [];

    /**
     * Extended identifier flag
     * @property is_ext_id
     * @type Boolean
     */
    this.is_ext_id = false;

    /**
     * Remote flag frame
     * @property is_remote
     * @type Boolean
     */
    this.is_remote = false;
}

module.exports = frame;
