<template>
  <div class="x-container container">

      <!-- invoice generator -->
      <section class="invoice-container" style="">

          <div class="invoice" id="invoice-container" @click="handleClick">
            <div class="row">
              <div class="col-7 mb-2" data-invoicly="true" data-only-settings="true">
                <img alt="Logo" id="uploadedLogo" src="https://fakeimg.pl/600x400?text=Logo" class="logo">
                <form id="logoForm">
                  <input type="file" accept="image/*" id="logoInput" @change="handleLogoChange()">
                </form>

              </div>
              <div class="col-5">
                <span class="document-type display-4">
                  <div data-invoicly="true" class="h1">FACTURE</div>
                </span>
                <div class="text-right" data-invoicly="true">N°90T-17-01-0123</div>
              </div>
            </div>
            <div class="row">
              <div class="col-7">
                <div data-invoicly="true">90TECH SAS</div><br>
                <div data-invoicly="true">
                  6B Rue Aux-Saussaies-Des-Dames <br> 57950 MONTIGNY-LES-METZ
                </div>

              </div>
              <div class="col-5" style="text-align: right;">
                <div class="mb-2" data-invoicly="true">
                  Date: {{currentDate}}
                </div>
                <div data-invoicly="true">
                  Energies54 <br>
                  Réf. Client C00022 <br>
                  12 Rue de Verdun <br>
                  54250 JARNY</div>
              </div>
            </div>
            <br>
            <br>
            <h6>
              <div data-invoicly="true">Audits et rapports mensuels (1er Novembre 2016 - 30 Novembre 2016)</div>
            </h6>
            <br>
            <div class="table-responsive">
              <table id="table" class="table table-striped">
              <thead>
                <tr>
                  <th data-invoicly="true">Description</th>
                  <th data-invoicly="true">Quantité</th>
                  <th data-invoicly="true">Unité</th>
                  <th data-invoicly="true">PU HT</th>
                  <th data-invoicly="true">TVA</th>
                  <th data-invoicly="true">Total HT</th>
                  <th class="hide-elements">Action</th>

                </tr>
              </thead>
              <tbody>
                <tr v-for="(row, index) in rows" :key="index">
                  <td><span :data-invoicly-field="'description'" :data-invoicly-row-id="index" :data-invoicly="true">{{ row.description }}</span></td>
                  <td><span data-invoicly-field="quantity" :data-invoicly-row-id="index" :data-invoicly="true" data-invoicly-type="number">{{ row.quantity }}</span></td>
                  <td><span data-invoicly-field="unity" :data-invoicly-row-id="index" :data-invoicly="true">{{ row.unity }}</span></td>
                  <td><span data-invoicly-field="puHT" :data-invoicly-row-id="index" :data-invoicly="true" data-invoicly-type="number">{{ row.puHT }}</span> {{currency}}</td>
                  <td><span data-invoicly-field="tva" :data-invoicly-row-id="index" :data-invoicly="true" data-invoicly-type="number">{{ row.tva }}</span>%</td>
                  <td><span data-invoicly-field="totalHT" :data-invoicly-row-id="index" :data-invoicly="true" data-invoicly-type="number">{{ row.totalHT }}</span> {{currency}}</td>
                  <td>
                    <button class="btn btn-sm btn-danger" @click="deleteRow(index)">-</button>
                  </td>
                </tr>
              </tbody>

            </table>
            </div>

            <button style="display:block;text-align:right" class="btn btn-xs btn-success" @click="addNewRow()">+</button>

            <div class="row">
              <div class="col-8">
              </div>
              <div class="col-4">
                <table class="table table-sm text-right">
                  <tbody>
                    <tr>
                      <td><strong data-invoicly="true" >Total HT</strong></td>
                      <td class="text-right" id="total-ht">{{totalHT.toFixed(2)}} {{currency}} </td>
                    </tr>
                    <tr>
                      <td data-invoicly="true">TVA 20%</td>
                      <td class="text-right" id="total-tva">{{totalTVA.toFixed(2)}} {{currency}} </td>
                    </tr>
                    <tr>
                      <td data-invoicly="true"><strong>Total TTC</strong></td>
                      <td class="text-right" id="total-ttc">{{totalTTC.toFixed(2)}} {{currency}} </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div class="conditions" data-invoicly="true">
              En votre aimable règlement
              Et avec nos remerciements. <br>
              Conditions de paiement : paiement à réception de facture, à 15 jours. <br>
              Aucun escompte consenti pour règlement anticipé. <br>
              Règlement par virement bancaire. <br>

              En cas de retard de paiement, <br> indemnité forfaitaire pour frais de recouvrement : 40 euros (art. L.4413
              et L.4416s
              code du commerce).

            </div>

            <br>
            <br>
            <br>
            <br>

            <div  class="bottom-page text-right" data-invoicly="true">
              90TECH SAS - N° SIRET 80897753200015 RCS METZ <br>
              6B, Rue aux Saussaies des Dames - 57950 MONTIGNY-LES-METZ 03 55 80 42 62 - www.90tech.fr <br>
              Code APE 6201Z - N° TVA Intracom. FR 77 808977532 <br>
              IBAN FR76 1470 7034 0031 4211 7882 825 - SWIFT CCBPFRPPMTZ <br>
            </div>

          </div>

      </section>

      <!-- settings -->
      <section class="hide-elements settings-container">
        <p class="text-center h4">Settings</p>
        <table class="table table-responsive">
          <tbody>
            <tr>
              <td><strong>Currency:</strong></td>
              <td>
                <select v-model="currency" id="select-currency" class="form-select">
                  <option value="dh">MAD (dh)</option>
                  <option value="$">USD ($)</option>
                  <option value="€">EUR (€)</option>
                  <option value="£">GBP (£)</option>
                </select>
              </td>
            </tr>
            <tr>
              <!-- <td><strong>Show Logo:</strong></td> -->
              <!-- <td>
                <div class="mb-3 form-check">
                  <input type="checkbox" id="autoRecalculate" class="form-check-input">
                </div>
              </td> -->
            </tr>

          </tbody>
        </table>
        <button style="display:block;width:100%" class="btn btn-success btn-block" @click="printInvoice()">Imprimer la facture</button>

        <hr>
        <div v-if="style && showSettings" class="settings-div" id="settingsDiv">
          <div>
            <div class="form-group mb-2">
              <label for="textAlign">Text Align:</label>
              <div style="display:flex;justify-content:space-between">
                <div><i :style="style.textAlign != 'left' ? 'color:#ddd' : ''" @click="setAlign('left')" class="fa fa-align-left cursor-pointer"></i></div>
                <div><i :style="style.textAlign != 'center' ? 'color:#ddd' : ''" @click="setAlign('center')" class="fa fa-align-center cursor-pointer"></i></div>
                <div><i :style="style.textAlign != 'right' ? 'color:#ddd' : ''" @click="setAlign('right')" class="fa fa-align-right cursor-pointer"></i></div>
              </div>
            </div>

            <div v-if="false" class="form-group mb-2">
              <label for="backgroundColor">Background Color:</label>
              <input type="color" class="form-control" id="background" @change="backgroundColorChanged()" v-model="style.backgroundColor" name="backgroundColor">
            </div>

            <div class="form-group mb-2">
              <label for="color">Text Color:</label>
              <input type="color" class="form-control" id="color" @change="colorChanged()" v-model="style.color" name="color">
            </div>

            <div class="form-group mb-2">
              <label for="fontSize">Font Size:</label>
              <input type="number" class="form-control" id="fontSize" v-model="style.fontSize" @change="fontSizeChanged()" name="fontSize" value="16">
            </div>

            <div class="form-group mb-2">
              <label for="fontSize">Font Weight:</label>
                <div class="cursor-pointer" style="display:flex;justify-content:center">
                  <span class="p-1" @click="setFontWeight('bolder')"><b>Abc</b></span>
                  <span class="p-1" @click="setFontWeight('lighter')">Abc</span>
                </div>
            </div>

            <div class="form-group mb-2">
              <label for="fontSize">Value:</label>
              <input type="string" class="form-control" v-model="currentValue" @change="setCurrentValue()" name="fontSize" value="16">
            </div>



          </div>
        </div>

      </section>

  </div>
</template>

<script>
export default {
  name: 'Invoice',
  data(){
    return {
      rows: [
        { description: 'Product 1', quantity: 1, unity: 'Unit', puHT: 10, tva: 20, totalHT: 10 },
        { description: 'Product 2', quantity: 2, unity: 'Unit', puHT: 20, tva: 10, totalHT: 40 },
      ],
      style : {
        backgroundColor: '#ffffff',
        color: '#000000',
        fontSize: '16 px',
        textAlign : 'center',
        fontWeight : 'lighter'
      },
      currency: 'dh',
      totalHT: 0,
      totalTVA: 0,
      totalTTC: 0,
      showSettings : false,
      selectedElement : null,
      currentValue : null,
      currentDate : null
    }
  },
  methods: {
    handleClick(event) {
      const editableDiv = event.target;

      this.selectedElement = null
      if (editableDiv.getAttribute('data-invoicly')) {

        this.currentValue = editableDiv.innerText

        this.selectedElement = editableDiv
        //show settings
        this.showSettings = true
        this.style.color = this.rgbaToHex(window.getComputedStyle(editableDiv).color)
        this.style.backgroundColor = this.rgbaToHex(window.getComputedStyle(editableDiv).backgroundColor)
        this.style.fontSize = window.getComputedStyle(editableDiv).fontSize.replace('px','')
        this.style.textAlign = window.getComputedStyle(editableDiv).textAlign

        if(editableDiv.getAttribute('data-only-settings')) return

        if (editableDiv.getAttribute('data-invoicly-type') === 'number') {
          this.editNumberField(editableDiv);
        } else {
          this.editTextField(editableDiv);
        }
      }else{
        this.showSettings = false
      }
    },
    rgbaToHex(rgba) {
      // Extract the values of red, green, blue, and alpha from the RGBA string
      const values = rgba.match(/\d+/g);

      // Convert the RGB values to hexadecimal
      const hex = values.slice(0, 3)
        .map(val => Number(val).toString(16).padStart(2, '0'))
        .join('');

      // Convert the alpha value to hexadecimal
      const alphaHex = Math.round(parseFloat(values[3]) * 255).toString(16).padStart(2, '0');

      // Construct the HEX representation with or without alpha
      const hexWithAlpha = values[3] !== undefined ? `#${hex}${alphaHex}` : `#${hex}`;

      return hexWithAlpha.toUpperCase(); // Optionally convert to uppercase
    },
    editNumberField(editableDiv) {
      const inputElement = document.createElement('input');
      inputElement.type = 'number';
      inputElement.min = 0
      inputElement.style.width = editableDiv.offsetWidth * 1.8 + 'px';
      inputElement.value = editableDiv.innerText;
      inputElement.className = 'transparent-input text-right';

      editableDiv.replaceWith(inputElement);

      inputElement.addEventListener('blur', () => {
        editableDiv.innerText = inputElement.value;

        const rowId = editableDiv.getAttribute('data-invoicly-row-id')
        const field = editableDiv.getAttribute('data-invoicly-field')
        if(rowId && field){
          this.rows[rowId][field] = parseFloat(inputElement.value)
        }
        inputElement.replaceWith(editableDiv);
        this.calculateTotals();

        //set value
        this.currentValue = editableDiv.innerText
      });

      inputElement.focus();
    },
    editTextField(editableDiv) {
      const inputElement = document.createElement('textarea');
      inputElement.style.height = editableDiv.offsetHeight + 'px';
      inputElement.style.width = editableDiv.offsetWidth * 0.5 + 'px !important';
      inputElement.value = editableDiv.innerText;
      inputElement.className = 'cc transparent-input text-right';

      editableDiv.replaceWith(inputElement);

      inputElement.addEventListener('blur', () => {

        const rowId = editableDiv.getAttribute('data-invoicly-row-id')
        const field = editableDiv.getAttribute('data-invoicly-field')
        if(rowId && field){
          this.rows[rowId][field] = parseFloat(inputElement.value)
        }

        editableDiv.innerText = inputElement.value;
        inputElement.replaceWith(editableDiv);
        this.calculateTotals();
        //set value
        this.currentValue = editableDiv.innerText
      });

      inputElement.focus();
    },
    calculateTotals() {
      this.totalHT = 0;
      this.totalTVA = 0;
      this.totalTTC = 0;

      this.rows.forEach((row) => {
        const { quantity, puHT, tva } = row;

        // Calculate total HT for the current row
        const rowTotalHT = quantity * puHT;

        row.totalHT = rowTotalHT

        // Update total HT, total TVA, and total TTC
        this.totalHT += rowTotalHT;
        this.totalTVA += rowTotalHT * (tva / 100);
        this.totalTTC += rowTotalHT * (1 + tva / 100);
      });

    },
    addNewRow() {
      const newRow = {
        description: 'New Description',
        quantity: 1,
        unity: 'Unit',
        puHT: 0,
        tva: 0,
        totalHT: 0,
      };

      this.rows.push(newRow);
      this.calculateTotals();
    },
    deleteRow(index) {
      const isConfirmed = window.confirm("Are you sure you want to proceed?");
      if(isConfirmed){
        this.rows.splice(index, 1);
        this.calculateTotals();
      }
    },
    handleLogoChange() {
      const logoInput = document.getElementById('logoInput');
      const uploadedLogo = document.getElementById('uploadedLogo');

      const file = logoInput.files[0];

      if (file) {
        // Use FileReader to read the selected file
        const reader = new FileReader();

        reader.onload = function (e) {
          // Set the source of the image to the base64-encoded content of the file
          uploadedLogo.src = e.target.result;
        };

        // Read the file as a data URL
        reader.readAsDataURL(file);
      }
    },
    fontSizeChanged(){
      this.selectedElement.style.fontSize = this.style.fontSize + 'px'
    },
    colorChanged(){
      this.selectedElement.style.color = this.style.color
    },
    backgroundColorChanged(){
      this.selectedElement.style.backgroundColor = this.style.backgroundColor
    },
    setAlign(where){
      this.style.textAlign = where
      this.selectedElement.style.textAlign = where
    },
    setFontWeight(where){
      this.style.fontWeight = where
      this.selectedElement.style.fontWeight = where
    },
    setCurrentValue(){
      this.selectedElement.innerText = this.currentValue

    },
    printInvoice() {
      // Implement printInvoice logic
      window.print()
    },
    getCurrentDate() {
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, '0');
      const day = String(today.getDate()).padStart(2, '0');

      const formattedDate = `${year}-${month}-${day}`;
      return formattedDate;
    },
    applySettings() {
      const parentDiv = document.getElementById('invoice-container');
      this.applySettingsToElement(parentDiv);
    },
    applySettingsToElement(targetDiv) {
      targetDiv.style.backgroundColor = this.backgroundColor;
      targetDiv.style.color = this.color;
      targetDiv.style.fontSize = this.fontSize + 'px';
    },
  },
  watch: {
    'rows': {
      deep: true,
      handler: 'calculateTotals',
    },
  },
  mounted() {
    this.calculateTotals()
    this.currentDate = this.getCurrentDate()
  },
}
</script>
<style scoped>

.btn {
      display: inline-block;
      font-weight: 400;
      text-align: center;
      white-space: nowrap;
      vertical-align: middle;
      user-select: none;
      border: 1px solid transparent;
      padding: 0.375rem 0.75rem;
      font-size: 1rem;
      line-height: 1.5;
      border-radius: 0.25rem;
      transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }

    /* Button styles for different types */
    .btn-primary {
      color: #fff;
      background-color: #007bff;
      border-color: #007bff;
    }

    .btn-secondary {
      color: #fff;
      background-color: #6c757d;
      border-color: #6c757d;
    }

    .btn-danger {
      color: #fff;
      background-color: #dc3545;
      border-color: #dc3545;
    }

     .btn-success {
      color: #fff;
      background-color: #28a745;
      border-color: #28a745;
    }


#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  body {
    background: #ddd;
    margin-bottom:2rem
  }

  textarea {
    width: 100% !important;
    border: 1px solid #ddd !important;
  }

  .invoice {
    background: #fff;
    width: 100%;
    padding: 50px;
  }

  .logo {
    width: 2.5cm;
  }

  .document-type {
    text-align: right;
    color: #444;
  }

  .conditions {
    font-size: 0.7em;
    color: #666;
  }

  .bottom-page {
    font-size: 0.7em;
  }

  table {
    font-size: 12px !important;
  }

  table td {
    padding: 0.45rem !important;
  }

  table td {
    font-size: 15px;
  }

  .transparent-input {
    border: 1px dashed blue !important;
    background: transparent;
    outline: none;
  }

  .flex-container {
    display: flex;
  }

  [data-invoicly="true"] {
    border: 1px dashed #ddd;
    padding: 5px 15px;
  }

  .settings-div {
    /* display: none; */
    background-color: white;
    padding: 20px;
    border: 1px solid #ccc;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .invoice-container{
    width:78%;
    float:left;
    overflow: hidden;
  }

  .settings-container{
    width:20%;
    float:right
  }


  /* general settings*/
  .cursor-pointer{
    cursor: pointer;
  }


  /* nav */

  .center-navbar {
    justify-content: center;
    align-items: center;
    margin-bottom:6rem
  }

  .navbar {
    background-color: #343a40; /* Dark background color */
  }

  .navbar-brand,
  .navbar-nav .nav-link {
    color: #ffffff; /* White text color */
  }

  .navbar-toggler-icon {
    background-color: #ffffff; /* White color for the toggler icon */
  }

  /* Optional: Add some spacing between navbar items */
  .navbar-nav .nav-item {
    margin-right: 10px;
  }




  /* responsive */
  /* Responsive styles for smaller screens */
  @media (max-width: 768px) {
    body {
      font-size: 12px !important;
    }

    .container {
      width: 100% !important;
      margin : 0 !important
    }

    .invoice-container,
    .settings-container{
      width: 100% !important;
    }

    .invoice{
      width: 100% !important;
      padding: 10px !important;
    }
  }

/* Responsive styles for even smaller screens */
  @media (max-width: 576px) {
    body {
      font-size: 12px;
    }

    header {
      text-align: center;
    }

    section {
      padding: 10px;
    }
  }

</style>
