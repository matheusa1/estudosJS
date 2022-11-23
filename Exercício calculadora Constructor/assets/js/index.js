function Calculator() {
  this.display = document.querySelector(".display")

  this.start = () => {
    this.getButtonsClick()
    this.getEnterClick()
    this.display.focus()
  }

  this.getButtonsClick = () => {
    document.addEventListener("click", (event) => {
      const element = event.target

      if (
        element.classList.contains("btnNum") ||
        element.classList.contains("btnOp")
      )
        addValueOnDisplay(element.innerText)
      if (element.classList.contains("btnClear")) clearDisplay()
      if (element.classList.contains("btnDel")) deleteOne()
      if (element.classList.contains("btnEq")) {
        const result = calculate()
        clearDisplay()
        updateDisplay(result)
        this.display.focus()
      }
    })
  }

  this.getEnterClick = () => {
    document.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        const result = calculate()
        clearDisplay()
        updateDisplay(result)
        this.display.focus()
      }
    })
  }

  const addValueOnDisplay = (value) => {
    this.display.value += value
    this.display.focus()
  }
  const clearDisplay = () => (this.display.value = "")
  const deleteOne = () => (this.display.value = this.display.value.slice(0, -1))
  const calculate = () => {
    try {
      return eval(this.display.value)
    } catch (error) {
      return "Erro"
    }
  }
  const updateDisplay = (value) => (this.display.value = value)
}

const calculator = new Calculator()
calculator.start()
