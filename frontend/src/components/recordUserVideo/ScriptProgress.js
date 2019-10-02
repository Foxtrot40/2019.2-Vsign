import React, { Component } from 'react'
import { Progress } from 'rsuite';

const { Circle, Line } = Progress;

export class ScriptProgress extends Component {
    constructor(props) {
        super(props);
        this.state = {
          status: null,
          percent: 30,
          color: '#3385ff'
        };
        this.decline = this.decline.bind(this);
        this.increase = this.increase.bind(this);
      }


      changePercent(nextPercent) {
        const percent = nextPercent < 0 ? 0 : nextPercent > 100 ? 100 : nextPercent;
        this.setState({
          percent,
          status: percent === 100 ? 'success' : null,
          color: percent === 100 ? '#52c41a' : '#3385ff'
        });
      }
      decline() {
        const stepSize = this.props.stepSize
        this.changePercent(this.state.percent - stepSize);
      }
      increase() {
          const stepSize = this.props.stepSize
        this.changePercent(this.state.percent + stepSize);
      }
      render() {
        const { percent, color, status } = this.state;
        return (
          <div>
            <ButtonGroup>
              <Button onClick={this.decline}>-</Button>
              <Button onClick={this.increase}>+</Button>
            </ButtonGroup>
            <hr />
            <Line percent={percent} strokeColor={color} status={status} />
            <div style={{ width: 120, marginTop: 10 }}>
              <Circle percent={percent} strokeColor={color} status={status} />
            </div>
          </div>
        );
      }
    }

export default ScriptProgress
