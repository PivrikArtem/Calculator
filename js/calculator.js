class Calculator {
    constructor(divId) {
        this.divId = divId;
        this.divIdName = document.querySelector('#' + divId);
        this.needClearResult = false;
        this.valueOperation = null;
        this.memoryInput1 = null;
        this.memoryInput2 = null;
    }
    render() {
        this.divIdName.innerHTML =
            `  <input class="display_results" id='inputId${this.divId}' placeholder="Enter number"/>

            <div class='buttons'>
                <div class="btn-row">
                    <button class='button' data-numeral="7">7</button>
                    <button class='button' data-numeral="8">8</button>
                    <button class='button' data-numeral="9">9</button>
                    <button class='button' data-operation="/">/</button>
                </div>
                <div class="btn-row">
                    <button class='button' data-numeral="4">4</button>
                    <button class='button' data-numeral="5">5</button>
                    <button class='button' data-numeral="6">6</button>
                    <button class='button' data-operation="*">*</button>
    
                </div>
                <div class="btn-row">
                    <button class='button' data-numeral="1">1</button>
                    <button class='button' data-numeral="2">2</button>
                    <button class='button' data-numeral="3">3</button>
                    <button class='button ' data-operation="-">-</button>
                </div>
                <div class="btn-row">
                    <button id='IdC${this.divId}' class="button">C</button>
                    <button class='button' data-numeral="0">0</button>
                    <button class='button' data-operation="+">+</button>
                    <button id='IdResult${this.divId}' class="button">=</button>
                </div>
    
            </div>`
    }
    initialization() {            //initialization method

        this.arryNumbers = document.querySelectorAll('button[data-numeral]');
        this.arryOperations = document.querySelectorAll('button[data-operation]');
        this.elementC = document.getElementById('IdC' + this.divId);
        this.elementResult = document.getElementById('IdResult' + this.divId);
        this.inputValue = document.getElementById('inputId' + this.divId);
        // debugger;
    }
    addListeners() {              // subscribe to events
        this.elementResult.addEventListener('click', this.onElementResultClick.bind(this));
        this.elementC.addEventListener('click', this.onElementDeleteClick.bind(this));
        for (let i = 0; i < this.arryNumbers.length; i++) {
            this.arryNumbers[i].addEventListener('click', this.onArryNumbersClick.bind(this));
        }
        for (let j = 0; j < this.arryOperations.length; j++) {
            this.arryOperations[j].addEventListener('click', this.onArryOperationsClick.bind(this));
        }
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

        this.inputValue.value += e.currentTarget.dataset.numeral;
        this.needClearResult = false;
    }

    onArryOperationsClick(e) {
        this.needClearResult = true;
        this.valueOperation = e.currentTarget.dataset.operation;
    }

    onElementResultClick() {
        var finalyResult = 0;
        switch (this.valueOperation) {
            case '+':
                finalyResult = Number(this.memoryInput2) + Number(this.inputValue.value);
                break;
            case '-':
                finalyResult = Number(this.memoryInput2) - Number(this.inputValue.value);
                break;
            case '*':
                finalyResult = Number(this.memoryInput2) * Number(this.inputValue.value);
                break;
            case '/':
                finalyResult = Number(this.memoryInput2) / Number(this.inputValue.value);
                break;

        }
        this.inputValue.value = finalyResult;
    }
    onElementDeleteClick(e) {
        this.inputValue.value = '0';
    }

}