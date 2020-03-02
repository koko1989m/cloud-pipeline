/*
 * Copyright 2017-2020 EPAM Systems, Inc. (https://www.epam.com/)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import {Radio} from 'antd';

export const SummaryHOC = WrappedComponent => {
  return class extends React.Component {
    state= {
      display: 'linear'
    };
    displayHandler = (e) => {
      this.setState({
        display: e.target.value
      });
    }
    render () {
      const {display} = this.state;
      return (
        <div>
          <Radio.Group
            value={display}
            onChange={this.displayHandler}
            style={{display: 'flex', justifyContent: 'center'}}
          >
            <Radio.Button key="linear" value="linear">linear</Radio.Button>
            <Radio.Button key="bar" value="bar">bar</Radio.Button>
          </Radio.Group>
          <WrappedComponent
            display={display}
            {...this.props}
          />
        </div>
      );
    }
  };
};
