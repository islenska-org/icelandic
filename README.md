# Icelandic

This is a collection of ES6 methods for dealthing with [Icelandic language][isl] text.

## Installing

It's available on NPM:

    npm i --save icelandic


## Usage

These are the methods available and what they do:

### icelandic.decompose

Replaces special Icelandic characters in a string with their ASCII equivalents.

    const icelandic = require("icelandic");
    icelandic.decompose("Sævör grét áðan því úlpan var ónýt.")
    // = "Saevor gret adan thvi ulpan var onyt."


### icelandic.slugify

A variant of decompose that will also remove non-word characters and clean up spaces and punctuation into dashes:

    const icelandic = require("icelandic");
    icelandic.decompose("Sævör grét áðan því úlpan var ónýt.")
    // = "Saevor-gret-adan-thvi-ulpan-var-onyt"


### icelandic.alphabetical

Collate function for sorting strings using Icelandic alphabetical rules.

    const icelandic = require("icelandic");
    ["áríðandi", "ári", "árið", "Ári"].sort(icelandic.alphabetical)
    // = [ "ári", "Ári", "árið", "áríðandi" ]

### icelandic.isPlural

Report whether a number demands a plural or singular declension. Icelandic language has only a single plural form.

    const icelandic = require("icelandic");
    icelandic.isPlural(11)
    // = false



[isl]: https://en.wikipedia.org/wiki/Icelandic_language
