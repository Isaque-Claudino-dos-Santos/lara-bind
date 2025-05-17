# lara-bind

lib para fazer bind em nivel de método de class

## Instalação

```bash
  npm i lara-bind
```

## Importação

```ts
  import bind from 'lara-bind'
  // OR
  const bind = require('lara-bind')
```

## Uso

❌
```ts
  class Game {
    constructor() {
      this.update = this.update.bind(this)
      this.render = this.render.bind(this)
    }
    
    @bind()
    update() {}

    @bind()
    render() {}

    start() {
      this.render()
      this.update()
    }
  }

  const game = new Game()

  game.start()
```

✅
```ts
  import bind from 'lara-bind'

  class Game {
    @bind()
    update() {}

    @bind()
    render() {}

    start() {
      this.render()
      this.update()
    }
  }

  const game = new Game()

  game.start()
```

