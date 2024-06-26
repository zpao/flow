#!/bin/bash
# Copyright (c) Meta Platforms, Inc. and affiliates.
#
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.

assert_errors "$1" check . --all --no-flowlib --show-all-errors --include-warnings --color=always
assert_errors "$1" check . --all --no-flowlib --show-all-errors --include-warnings --color=unstable_ide_mode_EXPOSED_FOR_TESTING
