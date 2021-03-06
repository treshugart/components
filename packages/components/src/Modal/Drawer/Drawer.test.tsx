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
import {
  assertSnapshot,
  assertSnapshotShallow,
} from '@looker/components-test-utils'
import { ModalContent, ModalFooter, ModalHeader } from '../Layout'
import { Drawer } from './Drawer'
import { DrawerManager } from './DrawerManager'

const content = (
  <>
    words and stuff <button>boo!</button>
  </>
)

test('Drawer Hidden', () => {
  assertSnapshot(
    <DrawerManager content={content}>
      {onClick => <a onClick={onClick}>🥑</a>}
    </DrawerManager>
  )
})

test('Drawer Shown', () => {
  assertSnapshotShallow(<Drawer isOpen>{content}</Drawer>)
})

test('Drawer, backdrop customized', () => {
  assertSnapshotShallow(
    <Drawer isOpen backdrop={{ background: 'purple', opacity: 1 }}>
      {content}
    </Drawer>
  )
})

test('Selection Drawer, Shown', () => {
  assertSnapshotShallow(
    <Drawer isOpen>
      <ModalHeader>Pick stuff</ModalHeader>
      <ModalContent>Stuff and things...</ModalContent>
      <ModalFooter>
        <button>Pick some stuff</button>
        <button>Cancel</button>
      </ModalFooter>
    </Drawer>
  )
})
