#!/bin/bash
# Master Synthesis Script for ScholarsGate
echo "--- Initializing ScholarsGate Compilation ---"
cd backend && make compile
echo "--- Compiling Frontend Assets ---"
cd ../ && npm run build
echo "--- Packaged Successfully ---"