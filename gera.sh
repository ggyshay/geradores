#!/bin/sh
echo $1

case $1 in
  "cpf") cpf=`node cpf.js`
         echo $cpf
         adb shell input text $cpf;;
  "nome") nome=`node names.js`
            echo $nome
            adb shell input text $nome;;

  "email") email=`node email.js`
         echo $email
         adb shell input text $email;;
esac