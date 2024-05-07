import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App should render', () => {
  it('should render text', () => {
    render(<App />)

    expect(screen.getByRole('paragraph')).toHaveTextContent('test')
  })
})
