# IVLE Fix

A chromium(/chrome/iron) extension that _fixes_ IVLE's looks for, you know, the 21st century.
Or at least that's the aim. I suck as a designer.

Contributions are _very_ welcome. I'd much prefer that you submit your changes as a pull request, but if you have design ideas but aren't a coder, contact me over email and maybe I'll implement it ;)

Code might be--scratch that--is a bit messy right now. On the list of things to do.

### Download

* Using git

    git clone https://github.com/darora/ivle-fix/

* Manually
    * Download using the Github .zip download option
    * Extract to a temporary folder

* Chromium -> Tools -> Extensions
    * Enable 'Developer Mode'
    * Click on 'Load unpacked extension...' & navigate to the folder you downloaded the files to

### Contributing

#### Design

Erm. Email me about your ideas?

#### Develop

Much better.

Bootstrap is used for design, and jQuery 1.7 & Underscore.js is already available.

The project uses [SCSS]{http://sass-lang.com/} & [Coffeescript]{http://coffeescript.org/}.

There might be a better way of installing either on your particular platform. But a generic method would be--

* Install [Ruby]{http://www.ruby-lang.org/en/downloads/}
    $ gem install sass
* Install Node.js & npm
    $ npm install coffee-script

Once you've got those two installed, you can use the included makefile to update the files using your changes.
    $ make all

Do note that Chromium doesn't auto-reload your extension files. So if you make changes, remember to press 'Reload' on the extensions page to see your changes!

### Screenshots

I'm going to regret adding this. Having to update the screenshots on every commit is going to be a PITA.

#### Before
![Before](https://github.com/darora/IVLE-Fix/raw/master/images/before.png)

#### After
![After](https://github.com/darora/IVLE-Fix/raw/master/images/after.png)

### Not using Chrome/Chromium?

* Port the extension over to your current browser & share it with the world! :)