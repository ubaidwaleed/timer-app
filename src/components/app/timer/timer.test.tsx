import React from "react"
import { shallow, ShallowWrapper } from "enzyme"
import Timer from "./timer"

describe("Timer", () => {
 // let container: ShallowWrapper<Readonly<{}>, Readonly<{}>, React.Component<{}, {}, any>>

  //beforeEach(() => (container = shallow(<Timer />)))

  it("should render a <div />", () => {
    const container=shallow(<Timer/>)
    expect(container.find("div").length).toBeGreaterThanOrEqual(1)
  })
})