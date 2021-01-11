# Icelandic

This is a collection of ES6 methods for dealthing with [Icelandic language][isl] text.

## Installing

It's available on NPM:

    npm i --save icelandic


## Usage

These are the methods available and what they do:

### icelandic.decompose(word)

Replaces special Icelandic characters in a string with their ASCII equivalents.

    const icelandic = require("icelandic");
    icelandic.decompose("Sævör grét áðan því úlpan var ónýt.")
    // = "Saevor gret adan thvi ulpan var onyt."


### icelandic.slugify(word)

A variant of decompose that will also remove non-word characters and clean up spaces and punctuation into dashes:

    const icelandic = require("icelandic");
    icelandic.decompose("Sævör grét áðan því úlpan var ónýt.")
    // = "Saevor-gret-adan-thvi-ulpan-var-onyt"


### icelandic.alphabetical(word1, word2)

Collate function for sorting strings using Icelandic alphabetical rules.

    const icelandic = require("icelandic");
    ["áríðandi", "ári", "árið", "Ári"].sort(icelandic.alphabetical)
    // = [ "ári", "Ári", "árið", "áríðandi" ]


### icelandic.isPlural(number)

Report whether an integer demands a plural or singular declension. Icelandic language has only a single plural form.

    const icelandic = require("icelandic");
    icelandic.isPlural(11)
    // = false


### icelandic.numerals(number [, gender] [, yearMode])

Encodes a number into word numbers. It supports a range up to 10<sup>21</sup>. Fractions are supported but limited to three decimals.

    const icelandic = require("icelandic");
    icelandic.numerals(123456789)
    // = "hundrað tuttugu og þrjár milljónir fjögur hundruð fimmtíu og sex þúsund sjö hundruð áttatíu og níu"

The `gender` argument should be one of `"kk"` (masculine), `"kvk"` (feminine), `"hvk"` (neuter). Function will default to neuter if nothing is provided.

    icelandic.numerals(53, "kk")
    // = "fimmtíu og þrír"

    icelandic.numerals(53, "kvk")
    // = "fimmtíu og þrjár"

The `yearMode` argument can be made to get the less conventional _teen_ form of hundreds for the range of numbers from 1000–2000.

    icelandic.numerals(1985)
    // = "nítján hundruð áttatíu og fimm"


### icelandic.syllableCount(word)

Count the number of syllables that make up an Icelandic word. This is basically as simple as counting the vowels, except Icelandic has cases of dipthongs that need to be counted specially:

    const icelandic = require("icelandic");
    icelandic.syllableCount("augasteinn")
    // = 3


### icelandic.rhymeEncode(word [, number])

Reduces a word into a simpler version that can be matched with other similar reductions to determine if the words rhyme.

    const icelandic = require("icelandic");
    icelandic.rhymeEncode("heimkynninu")
    // = 'h1mkininu'

The function takes a second argument that will limit the output to a number of syllables. Rhymes in Icelandic generally only use the final 1-2 syllables, so a more realistic way of determining if words rhyme would be something like comparing the final 2 syllables:

    const rhymeEncode = require("icelandic").rhymeEncode;
    rhymeEncode( 'augljósa', 2 ) === rhymeEncode( 'laktósa', 2 );
    // = true



Additionally, the collection provides some common strings useful for internationalization:

### icelandic.i18n

Exists as an object which members are names of days and months in the Icelandic language:

    console.log(icelandic.i18n);
    // {
    //   'decimal': ',',
    //   'thousands': '.',
    //   'days': ['Sunnudagur', 'Mánudagur', ... ],
    //   'shortDays': ['Sun', 'Mon', ... ],
    //   'months': ['Janúar', 'Febrúar', ... ],
    //   'shortMonths': ['Jan', 'Feb', ... ]
    // }


[isl]: https://en.wikipedia.org/wiki/Icelandic_language
