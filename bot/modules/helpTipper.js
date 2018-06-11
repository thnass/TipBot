'use strict';
let config = require('config');
let ravenFee = config.get('rvn').paytxfee;
let dogeFee = config.get('doge').paytxfee;
let lbryFee = config.get('lbc').paytxfee;
let protonFee = config.get('proton').paytxfee;
let ufoFee = config.get('ufo').paytxfee;
let phoenixFee = config.get('pxc').paytxfee;
let featherFee = config.get('ftc').paytxfee;
let cazFee = config.get('caz').paytxfee;
exports.commands = ['tiphelp'];
exports.tiphelp = {
  usage: '<subcommand>',
  description: 'This commands has been changed to currency specific commands!',
  process: function(bot, message) {
    message.author.send(
      '__**Ravencoin (RVN) Tipper**__\nTransaction Fees: **' + ravenFee + '**\n    **!tiprvn balance** : get your balance\n    **!tiprvn deposit** : get address for your deposits\n    **!tiprvn withdraw <ADDRESS> <AMOUNT>** : withdraw coins to specified address\n    **!tiprvn <@user> <amount>** :mention a user with @ and then the amount to tip them\n    **!tiprvn private <user> <amount>** : put private before Mentioning a user to tip them privately.\n'
    );
    message.author.send(
      '__**Dogecoin (DOGE) Tipper**__\nTransaction Fees: **' + dogeFee + '**\n    **!tipdoge balance** : get your balance\n    **!tipdoge deposit** : get address for your deposits\n    **!tipdoge withdraw <ADDRESS> <AMOUNT>** : withdraw coins to specified address\n    **!tipdoge <@user> <amount>** :mention a user with @ and then the amount to tip them\n    **!tipdoge private <user> <amount>** : put private before Mentioning a user to tip them privately.\n'
    );
    message.author.send(
      '__**LBRY Credit (LBC) Tipper**__\nTransaction Fees: **' + lbryFee + '**\n    **!tiplbc balance** : get your balance\n    **!tiplbc deposit** : get address for your deposits\n    **!tiplbc withdraw <ADDRESS> <AMOUNT>** : withdraw coins to specified address\n    **!tiplbc <@user> <amount>** :mention a user with @ and then the amount to tip them\n    **!tiplbc private <user> <amount>** : put private before Mentioning a user to tip them privately.\n'
    );
    message.author.send(
      '__**Proton (PROTON) Tipper**__\nTransaction Fees: **' + protonFee + '**\n    **!tipproton balance** : get your balance\n    **!tipproton deposit** : get address for your deposits\n    **!tipproton withdraw <ADDRESS> <AMOUNT>** : withdraw coins to specified address\n    **!tipproton <@user> <amount>** :mention a user with @ and then the amount to tip them\n    **!tipproton private <user> <amount>** : put private before Mentioning a user to tip them privately.\n'
    );
    message.author.send(
      '__**Uniform Fiscal Object (UFO) Tipper**__\nTransaction Fees: **' + ufoFee + '**\n    **!tipufo balance** : get your balance\n    **!tipufo deposit** : get address for your deposits\n    **!tipufo withdraw <ADDRESS> <AMOUNT>** : withdraw coins to specified address\n    **!tipufo <@user> <amount>** :mention a user with @ and then the amount to tip them\n    **!tipufo private <user> <amount>** : put private before Mentioning a user to tip them privately.\n'
    );
    message.author.send(
      '__**Phoenixcoin (PXC) Tipper**__\nTransaction Fees: **' + phoenixFee + '**\n    **!tippxc balance** : get your balance\n    **!tippxc deposit** : get address for your deposits\n    **!tippxc withdraw <ADDRESS> <AMOUNT>** : withdraw coins to specified address\n    **!tippxc <@user> <amount>** :mention a user with @ and then the amount to tip them\n    **!tippxc private <user> <amount>** : put private before Mentioning a user to tip them privately.\n'
    );
    message.author.send(
      '__**Feathercoin (FTC) Tipper**__\nTransaction Fees: **' + featherFee + '**\n    **!tipftc balance** : get your balance\n    **!tipftc deposit** : get address for your deposits\n    **!tipufo withdraw <ADDRESS> <AMOUNT>** : withdraw coins to specified address\n    **!tipftc <@user> <amount>** :mention a user with @ and then the amount to tip them\n    **!tipftc private <user> <amount>** : put private before Mentioning a user to tip them privately.\n\n    **<> : Replace with appropriate value.**'
    );
    message.author.send(
      '__**Cazcoin (CAZ) Tipper**__\nTransaction Fees: **' + cazFee + '**\n    **!tipcaz balance** : get your balance\n    **!tipcaz deposit** : get address for your deposits\n    **!tipcaz withdraw <ADDRESS> <AMOUNT>** : withdraw coins to specified address\n    **!tipcaz <@user> <amount>** :mention a user with @ and then the amount to tip them\n    **!tipcaz private <user> <amount>** : put private before Mentioning a user to tip them privately.\n\n    **<> : Replace with appropriate value.**'
    );
  }
};
