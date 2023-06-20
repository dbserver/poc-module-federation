#!/bin/bash
rm -rf dist
pnpm run build
pnpm run preview
