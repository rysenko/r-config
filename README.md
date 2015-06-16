[r-config](https://github.com/rysenko/r-config) is a configuration loader for node.js projects.

# Installation

    $ npm install r-config

# Usage

    var config = require('r-config');
    
Module will load JSON configurations from ```config``` folder in your project.

# Configurations

It will load configurations in the following order.

1. ```config/config.json```
2. ```config/config.<environment>.json```

Environment defaults to ```development``` if not specified. Default sections specified in config.json will be overriden
by sections specified it your environment-specific config.

config.json:

    {
      "aws":{
        "key":"key1",
        "secret":"secret1"
      },
      "analytics":{
        "key":"value"
      }
    }
config.development.json:

    {
      "aws":{
        "key":"key2",
        "secret":"secret2"
      }
    }

code.js

    var config = require('r-config');
    console.log(config);

This will be your merged config:

    {
      "aws":{
        "key":"key2",
        "secret":"secret2"
      },
      "analytics":{
        "key":"value"
      }
    }