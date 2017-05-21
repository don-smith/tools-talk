import React from 'react'
import { BlockQuote, Cite, Deck, Fill, Fit, Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Table, TableBody, TableRow, TableItem, Text } from 'spectacle'
import preloader from 'spectacle/lib/utils/preloader'
import CodeSlide from 'spectacle-code-slide'
import theme from './theme'

require('normalize.css')
require('spectacle/lib/themes/default/index.css')

const images = {
  ci: require('../assets/continuous-improvement.jpg'),
  brain: require('../assets/brain.jpg'),
  inputs: require('../assets/inputs.png'),
  arch: require('../assets/arch.png'),
  i3: require('../assets/i3.png'),
  tmux: require('../assets/tmux.png'),
  omz: require('../assets/oh-my-zsh.png'),
  neovim: require('../assets/neovim.png'),
  vimfx: require('../assets/vimfx.png'),
  vimium: require('../assets/vimium.png')
}

const code = {
  preGuidance: require('raw-loader!../assets/pre-guidance.txt'),
  postGuidance: require('raw-loader!../assets/post-guidance.txt')
}

preloader(images);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['fade']} transitionDuration={500} theme={theme} controls={false} progress='bar'>
        <Slide notes={`
          <p>Abstract: We are builders. And like all craftspeople, our tools are an important part of our work. We should frequently be considering how well our tools are working for us and honing them appropriately. In this talk Don will take us for a spin around his system and dev environment. To say he is obsessive about his tools is an understatement. And while he is a Linux/Vim user, hopefully there will still be plenty of inspiration for MacOS/Atom, Windows/VSCode, and other setups. While attention to our tools is appropriate for all languages and platforms, we'll focus on Node.</p>
          `}>
          <Heading size={1} caps lineHeight={1} textColor='secondary'>
            Sharpening your tools
          </Heading>
          <Text margin='10px 0 0' fit textColor='quartenary' size={1}>
            inspiration for continuous self-improvement
          </Text>
          <Image src={images.ci} />
        </Slide>

        <CodeSlide transition={[]} lang="js" code={code.preGuidance} ranges={[
          { loc: [0, 1], title: 'Pre-guidance' },
          { loc: [1, 4], title: 'Learn how to learn' },
          { loc: [5, 8], title: 'Touch type' },
          { loc: [9, 10], title: 'Remove repetition' }
        ]} notes={`<ul>
          <p>If you're still learning how to learn technology, continue to focus on that.</p>
          <p>If you don't know how to touch type, learn how! Huge productivity gains.</p>
          <p>If you've been a programmer for years, I hope you find some inspiration in this talk.</p>
        </ul>`} />

        <Slide notes={`
          <p>As programmers, our most important tool is our brain, and it should never be our bottleneck.</p>
          <p>Navigating our machine and our code should be largely from muscle memory and performing common and repetitive task should be quick.</p>
          <p>As programmers, we have greater control of our environment.</p>
          `}>
          <Heading size={2} textColor='secondary' fit caps>Why is this important?</Heading>
          <Image src={images.brain} margin={40} />
        </Slide>

        <Slide notes={`
          <p>Be intentional about how you use your keyboard and mouse.</p>
          <p>If you intend to use your mouse regularly, be efficient with it. Do <b>not</b> select text by clicking and dragging (double, triple and shift click instead). Try one hand on the keyboard and the other on the mouse.</p>
          <p>Alternatively, try to minimise using the mouse altogether. This is my preference. I find moving my hand to and from the mouse slows me down. A <b>lot</b> of my setup is designed to enable me to do everything with only my keyboard.</p>
          `}>
          <Heading size={2} textColor='secondary' fit caps>Be intentional with your inputs</Heading>
          <Image src={images.inputs} margin={40} />
        </Slide>

        <Slide>
          <Heading size={2} textColor='secondary' fit caps>My setup as an example</Heading>
          <Text italic fit textColor='quartenary'>Because it can be fun to see how others work</Text>
          <Table margin={30} textAlign='left'>
            <TableBody>
              <TableRow>
                <TableItem>Operating system</TableItem>
                <TableItem>Arch Linux</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>Window manager</TableItem>
                <TableItem>i3</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>Terminal manager</TableItem>
                <TableItem>tmux</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>Shell</TableItem>
                <TableItem>zsh and oh-my-zsh</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>Text editor</TableItem>
                <TableItem>Neovim</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>Browser extensions</TableItem>
                <TableItem>VimFX and Vimium</TableItem>
              </TableRow>
            </TableBody>
          </Table>
        </Slide>

        <Slide>
          <Image src={images.arch} />
          <List>
            <ListItem>Package manger: pacman (yaourt)</ListItem>
            <ListItem>Official, extra, community, and multilib</ListItem>
            <ListItem>Amazing documentation!</ListItem>
          </List>
        </Slide>

        <Slide>
          <Layout>
            <Fit>
              <Image src={images.i3} margin='0 50px 30px 0' width={200} />
            </Fit>
            <Fit>
              <Heading size={2} textColor='secondary'>i3</Heading>
            </Fit>
          </Layout>
          <List>
            <ListItem>Tiling window manger</ListItem>
            <ListItem>.xinitrc instead of a desktop manager</ListItem>
            <ListItem>Highly configurable</ListItem>
            <ListItem>Very easy to use</ListItem>
          </List>
        </Slide>

        <Slide>
          <Image src={images.tmux} />
          <List>
            <ListItem>A window manager for your terminal</ListItem>
            <ListItem>Sessions, windows and panes</ListItem>
            <ListItem>Save/restore over reboots</ListItem>
            <ListItem>Looks great with Powerline</ListItem>
            <ListItem>Easy navigation</ListItem>
          </List>
        </Slide>

        <Slide>
          <Image src={images.omz} />
          <List>
            <ListItem>I love my prompt! (themes)</ListItem>
            <ListItem>Complete all the things</ListItem>
            <ListItem>Global and suffix aliases</ListItem>
            <ListItem>zsh-syntax-highlighting</ListItem>
          </List>
        </Slide>

        <Slide>
          <Image src={images.neovim} />
          <List>
            <ListItem>No mouse needed</ListItem>
            <ListItem>Lightweight and fast</ListItem>
            <ListItem>Free and open source</ListItem>
            <ListItem>Scriptable configuration</ListItem>
            <ListItem>Already installed (except Windows)</ListItem>
            <ListItem>Active development community *</ListItem>
            <ListItem>Built-in terminal emulator *</ListItem>
            <ListItem>Async plugins *</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={2} textColor='secondary'>Vim in the browser</Heading>
          <Layout>
            <Fit>
              <Text margin={50}>
                <Image src={images.vimium} width={128} />
                <Image src={images.vimfx} />
              </Text>
            </Fit>
            <Fill>
              <List>
                <ListItem>Movement commands</ListItem>
                <ListItem>Super fast hyperlinking</ListItem>
                <ListItem>Text selection and copying</ListItem>
                <ListItem>No mouse needed</ListItem>
              </List>
            </Fill>
          </Layout>
        </Slide>

        <CodeSlide lang='js' code={code.postGuidance} ranges={[
          { loc: [0, 1], title: 'Post-guidance' },
          { loc: [1, 8], title: 'Improve in situ' },
          { loc: [8, 11], title: 'Review regularly' }
        ]} />

        <Slide>
          <Heading size={2} textColor='secondary' caps>Resources</Heading>
          <List>
            <ListItem>
              <Link href='https://www.meetup.com/Vim-AKL' textColor='quartenary'>Vim AKL Meetup</Link>
            </ListItem>
            <ListItem>
              <Link href='https://github.com/don-smith/tools-talk' textColor='quartenary'>This presentation's repo</Link>
            </ListItem>
            <ListItem>
              Don's <Link href='https://github.com/don-smith/dotfiles' textColor='quartenary'>dotfiles</Link>
              {' '} and {' '}
              <Link href='https://github.com/don-smith/dotfiles/wiki' textColor='quartenary'>setup guide</Link>
            </ListItem>
          </List>
          <Heading size={2} textColor='secondary' caps>Attribution</Heading>
          <List>
            <ListItem>
              Hosting platform: <Link href='https://zeit.co/now' textColor='quartenary'>Now</Link>
            </ListItem>
            <ListItem>
              Presentation: {' '}
              <Link href='https://github.com/FormidableLabs/spectacle' textColor='quartenary'>Spectacle</Link>
              {' '} and {' '}
              <Link href='https://github.com/thejameskyle/spectacle-code-slide' textColor='quartenary'>CodeSlide</Link>
            </ListItem>
          </List>
        </Slide>
      </Deck>
    )
  }
}
