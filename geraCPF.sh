#!/bin/sh
cpf=`node cpf.js`
echo $cpf
adb shell input text $cpf