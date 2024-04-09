import { mount } from '@vue/test-utils'
import { Button } from 'jin-ui'

describe('button', () => {
  it('should work', () => {
    const wrapper = mount(<Button type="primary">测试</Button>)
    const btnEl = wrapper.find('button') // 查找是否有button这个按钮
    const hasPrimary = btnEl.element.classList.contains('jin-button--primary')
    expect(hasPrimary).toBe(true)
    wrapper.unmount()
  })

  it('size', () => {
    const wrapper = mount(<Button size="large">测试</Button>)
    const btnEl = wrapper.find('button')
    expect(btnEl.element.classList.contains('jin-button-size--large')).toBe(true)
    wrapper.unmount()
  })

  it('click', () => {
    let clickState = false
    const handleClick = () => {
      clickState = true
    }
    const wrapper = mount(<Button onClick={handleClick}>测试</Button>)
    wrapper.trigger('click')
    expect(clickState).toBe(true)
  })
})
