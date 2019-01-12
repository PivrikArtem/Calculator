class Calculator {
    constructor() {
        this.arryNumbers = document.querySelectorAll('.button');
        this.arryOperations = document.querySelectorAll('.operation');
        this.elementC = document.getElementById('IdC');
        this.elementResult = document.getElementById('IdResult');
        this.inputValue = document.getElementById('inputId');
        this.needClearResult = false;
        this.valueOperation = null;
        this.memoryInput1 = null;
        this.memoryInput2 = null;

        for (let i = 0; i < this.arryNumbers.length; i++) {
            this.arryNumbers[i].addEventListener('click', this.onArryNumbersClick);
        }
        for (let j = 0; j < this.arryOperations.length; j++) {
           this.arryOperations[j].addEventListener('click', this.onArryOperationsClick);
        }
    }
    addListenerForElementResult() {
        this.elementResult.addEventListener('click', this.onElementResultClick);
    }

    onArryNumbersClick(e) {
        if (this.inputValue.value === '0') {
            this.inputValue.value = '';
        }
        if (this.inputValue.value !== '') {
            this.memoryInput1 = this.inputValue.value;
        }

        if (this.needClearResult) {
            this.inputValue.value = '';
        }
        if (this.inputValue.value === '') {
            this.memoryInput2 = this.memoryInput1;
        }

        inputValue.value += e.currentTarget.dataset.numeral;
        needClearResult = false;
    }

    onArryOperationsClick(e) {
        needClearResult = true;
        valueOperation = e.currentTarget.dataset.operation;
    }

    onElementResultClick() {
        var finalyResult = 0;
        switch (valueOperation) {
            case '+':
                finalyResult = Number(memoryInput2) + Number(inputValue.value);
                break;
            case '-':
                finalyResult = Number(memoryInput2) - Number(inputValue.value);
                break;
            case '*':
                finalyResult = Number(memoryInput2) * Number(inputValue.value);
                break;
            case '/':
                finalyResult = Number(memoryInput2) / Number(inputValue.value);
                break;

        }
        inputValue.value = finalyResult;
    }
}