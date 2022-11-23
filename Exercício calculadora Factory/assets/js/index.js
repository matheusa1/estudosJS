function calculator() {
  return {
    display: document.querySelector(".display"),

    start() {
      this.getButtonClick()
      this.getEnterClick()
    },

    getEnterClick() {
      document.addEventListener("keypress", (e) => {
        console.log(e)
        if (e.key === "Enter") {
          let result = this.doOperation()
          this.updateDisplay(result ? result : "")
        }
        this.display.focus()
      })
    },

    getButtonClick() {
      document.addEventListener("click", (e) => {
        const element = e.target

        if (
          element.classList.contains("btnNum") ||
          element.classList.contains("btnOp")
        ) {
          this.addValueOnDisplay(element.innerText)
          this.display.focus()
        }

        if (element.classList.contains("btnClear")) {
          this.clearDisplay()
        }

        if (element.classList.contains("btnDel")) {
          this.deleteOne()
        }

        if (element.classList.contains("btnEq")) {
          let result = this.doOperation()
          this.updateDisplay(result ? result : "")
          this.display.focus()
        }
      })
    },

    addValueOnDisplay(value) {
      this.display.value += value
    },

    updateDisplay(value) {
      this.display.value = value
    },

    clearDisplay() {
      this.display.value = ""
    },

    deleteOne() {
      this.display.value = this.display.value.slice(0, -1)
    },

    doOperation() {
      let operation = this.display.value

      try {
        return eval(operation)
      } catch (e) {
        return "Error"
      }
    },
  }
}

const calculator1 = calculator()
calculator1.start()
