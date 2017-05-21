# Tools Talk Outline

> Continuous improvement for ... yourself

## Intended audience

  * If you can't type without looking at the keys, **learn that first**
  * If you're a junior dev and still learning how to learn, keep that as your highest priority
  * If you've been coding for a couple of years and looking for effiencies, this is for you


## Why should we care?

* As programmers, our main tool is our brain
  - it should be our bottleneck
  - repetitive tasks should be automatic
    * muscle memory, or
    * performing actions quickly (sub-second)
* As programmers, we can take greater control of our environment
  - to make muscle memory or task completion easier/faster
  - a key way to do this is to be explicit about how you use a mouse
    * intentionally: like a gamer
    * or as little as possible (my preference)
      - my setup is geared to keep my hands on the keys


## My setup

* Operating System: Arch Linux
  - pacman
    * updates everything (firmware, arch, packages, etc)
    * repositories: official, extra, community and multilib
    * yaourt makes working with all of them easy
    * really reliable (no issues yet)
    * user initiated
    * [demonstrate]
  - amazing documentation (even device-specific)
    * [include link to wiki]
* Window manager (i3)
  - can avoid the need for a desktop manager (.xinitrc)
  - Tiling window managers ROCK!
    * doesn't take long to acclimate
  - Move between applications quickly and intuitively
    * [demonstrate]
  - all you really see is the statusbar and the launcher (dmenu)
  - windows can float ($mod-Shift-Space)
  - secure screen lock
* Terminal
  - I use gnome-terminal
    * font/color support and cursor switching in neovim
      - the latest version does
      - powerline and source code pro
    * not a lot of other Gnome dependencies
    * would be nice to have transparency
      - [make sure it is installed with pacman]
    * Two profiles: one with tmux and one without
    * ctrl-r to search through previous terminal commands
  - terminal manager (tmux)
    * named sessions, named and movable windows and panes oh my
    * can save and restore sessions, windows and panes over system restarts
    * looks _really_ nice with Powerline
      - I've matched all the colours
    * easy to navigate between panes [demo], windows [demo] and sessions [demo]
  - shell (zsh and oh-my-zsh)
    * I love my prompt!
    * plugins: aliases and prompt completion [demo git aliases]
    * managing PATH aliases, and shell scripts
  - editor (neovim)
    * remap capslocks to ctrl
    * moar powerline
    * like your editor: tabs, tree, git and linter support, code completion, formatting, code comments, syntax highlighting
      - but on steriods
        * easy motion, fuzzy open with ctrl-p
        * switch between nvim and other panes
        * marks and macros and keeping the fingers on the keys
* Web Browser (Firefox and Chromium)
  - Vimium for Chromium
  - VimFx for Firefox
  - [demo selecting a link, navigating back and forth and moving b/w tabs]
* Node.js
  - use nvm to manage versions and installations
  - optionally use .nvmrc to automatically select the node version for specific projects
  - yarn is **only** for installing dependencies
  - vmd is great for viewing markdown files
  - **use node scripts instead of installing globally**
    - acts as documentation for your project


## How to get there

* Don't try to do it all at once
* When you think 'this should be faster/easier', do a search, implement, stage, commit, push and use it.
* Review your dotfiles occasionally and remove the stuff you aren't using
  - setup aliases so it's easy to open your config files quickly
* Occasionally ask yourself, 'when is the last time I spent time with my tools?'

