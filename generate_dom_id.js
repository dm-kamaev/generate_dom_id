'use strict';

// GENERATE ID FOR DOM elements

module.exports = class GenerateDomId {

  /**
   * constructor
   * @param {String} baseId: 'main'
   */
  constructor(baseId) {
    this._id = baseId;
    this._number = 1;
  }

  /**
   * inc: increment id and get
   * @return {String} main_1
   */
  inc() {
    var id = this._id+'_'+this._number;
    this._number++;
    return id;
  }

  /**
   * toString:
   * @return {String} for usefule use: 'id='+gen_id+' style=....'
   */
  toString() {
    return this.inc();
  }

  /**
   * getSub:
   * @return {Generate_id}: create sub id with base as current id
   */
  getSub() {
    var id = this._id+'_'+(this._number - 1);
    return new GenerateDomId(id);
  }
};