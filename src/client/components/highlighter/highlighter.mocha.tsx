/*
 * Copyright 2015-2016 Imply Data, Inc.
 * Copyright 2017-2018 Allegro.pl
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

import { expect } from 'chai';
import * as sinon from 'sinon';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { renderIntoDocument } from '../../utils/test-utils';

import * as TestUtils from 'react-dom/test-utils';

import { TimeRange } from 'plywood';
import { Highlighter } from './highlighter';

describe('Highlighter', () => {
  it('adds the correct class', () => {
    var fakeTimeRange = TimeRange.fromJS({
      start: new Date('2015-01-26T04:54:10Z'),
      end: new Date('2015-01-26T05:54:10Z')
    });

    var myScaleX = (value: any) => { return 42; };

    var renderedComponent = renderIntoDocument(
      <Highlighter
        highlightRange={fakeTimeRange}
        scaleX={myScaleX}
      />
    );

    expect(TestUtils.isCompositeComponent(renderedComponent), 'should be composite').to.equal(true);
    expect(ReactDOM.findDOMNode(renderedComponent).className, 'should contain class').to.contain('highlighter');
  });

});
