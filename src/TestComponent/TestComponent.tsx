import React from 'react'

import { TestComponentProps } from './TestComponent.types'

import './TestComponent.scss'

const TestComponent: React.FC<TestComponentProps> = ({ theme }: TestComponentProps) => (
  <div
    data-test-id="test-component"
    className={`test-component test-component-${theme}`}
  >
    <h1 className="heading">I'm the test component</h1>
    <h2>Made with love by Ton</h2>
  </div>
)

export default TestComponent