import Sensor from './sensor';

import {
  DragStartSensorEvent,
  DragMoveSensorEvent,
  DragStopSensorEvent,
} from './../events/sensor-event';

export default class KeyboardSensor extends Sensor {
  constructor(containers = [], options = {}) {
    super(containers, options);

    this.dragging = false;

    this._onKeyup = this._onKeyup.bind(this);
  }

  attach() {
    document.addEventListener('keyup', this._onKeyup, true);
  }

  detach() {
    document.removeEventListener('keyup', this._onKeyup, true);
  }

  _onKeyup(event) {
    console.log(event)
  }
}
