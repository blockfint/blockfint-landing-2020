interface customProps {
  direction: number
  positionRightPic?: number
  positionLeftPic?: number
  transformDesktop?: {
    y: number
    scale: number
  }
}
export const variantsLeft = {
  enter: (custom: customProps) => {
    return {
      x: custom.direction > 0 ? custom.positionLeftPic - 300 : custom.positionLeftPic + 300,
      opacity: 1
    }
  },
  center: (custom: customProps) => {
    return {
      x: custom.positionLeftPic,
      zIndex: 1,
      opacity: 1
    }
  },
  exit: (custom: customProps) => {
    return {
      x: custom.direction < 0 ? custom.positionLeftPic - 300 : custom.positionLeftPic + 600,
      y: custom.direction < 0 ? 0 : custom.transformDesktop.y,
      scale: custom.direction < 0 ? 0 : custom.transformDesktop.scale,
      opacity: 0,
      zIndex: 0
    }
  }
}
export const variants = {
  enter: (custom: customProps) => {
    return {
      x: custom.direction > 0 ? -277 : 323,
      opacity: 1,
      zIndex: 2
    }
  },
  center: (custom: customProps) => {
    return {
      y: custom.transformDesktop.y,
      x: 0,
      scale: custom.transformDesktop.scale,
      opacity: 1,
      zIndex: 3
    }
  },
  exit: (custom: customProps) => {
    return {
      x: custom.direction > 0 ? 323 : -277,
      y: 0,
      scale: 1,
      opacity: 0,
      zIndex: 2
    }
  }
}
export const variantsRight = {
  enter: (custom: customProps) => {
    return {
      x: custom.direction > 0 ? custom.positionRightPic - 300 : custom.positionRightPic + 300,

      opacity: 1
    }
  },
  center: (custom: customProps) => {
    return {
      x: custom.positionRightPic,
      opacity: 1,
      zIndex: 1
    }
  },
  exit: (custom: customProps) => {
    return {
      x: custom.direction < 0 ? custom.positionRightPic - 600 : custom.positionRightPic + 300,
      y: custom.direction > 0 ? 0 : custom.transformDesktop.y,
      scale: custom.direction > 0 ? 0 : custom.transformDesktop.scale,
      opacity: 0,
      zIndex: 0
    }
  }
}