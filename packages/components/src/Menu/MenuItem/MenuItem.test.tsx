/*

 MIT License

 Copyright (c) 2019 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

import 'jest-styled-components'
import React from 'react'
import { assertSnapshot } from '@looker/components-test-utils'
import { palette } from '@looker/design-tokens'

import { MenuItem } from './MenuItem'

test('MenuItem', () => {
  assertSnapshot(<MenuItem>who!</MenuItem>)
})
test('MenuItem - icon', () => {
  assertSnapshot(<MenuItem icon="Beaker">who!</MenuItem>)
})
test('MenuItem - detail', () => {
  assertSnapshot(<MenuItem detail="Is an excellent question">who!</MenuItem>)
})

test('MenuItem - current', () => {
  assertSnapshot(
    <MenuItem current icon="Home">
      who!
    </MenuItem>
  )
})

test('MenuItem - current + marker', () => {
  assertSnapshot(
    <MenuItem current icon="Home">
      who!
    </MenuItem>
  )
})

test('MenuItem - with customizations', () => {
  const menuCustomizations =
    /* eslint-disable sort-keys */
    {
      bg: palette.purple500,
      color: palette.purple200,
      iconColor: palette.purple300,
      iconSize: 20,
      marker: {
        color: palette.purple900,
        size: 10,
      },
      hover: {
        bg: palette.purple700,
        color: palette.white,
        iconColor: palette.purple100,
      },
      current: {
        bg: palette.purple200,
        color: palette.purple900,
        iconColor: palette.purple500,
      },
      /* eslint-enable sort-keys */
    }

  assertSnapshot(
    <MenuItem current customizationProps={menuCustomizations}>
      who!
    </MenuItem>
  )
})

test('MenuItem - with single customization', () => {
  const menuCustomizations = {
    bg: palette.purple500,
  }

  assertSnapshot(
    <MenuItem current customizationProps={menuCustomizations}>
      who!
    </MenuItem>
  )
})
