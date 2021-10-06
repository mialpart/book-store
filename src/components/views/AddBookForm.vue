<template>
  <div>
    <b-form class="form-style" @submit="onSubmit" @reset="onReset">
      <b-form-group
        id="input-group-1"
        label="Kirja"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.title"
          type="text"
          placeholder="Syötä kirjan nimi"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-1"
        label="Sivujen määrä"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.pageCount"
          type="number"
          placeholder="Sivujen määrä"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Julkaisupäivä" label-for="input-2">
        <b-form-datepicker v-model="form.publishDate" required locale="fi"></b-form-datepicker>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="Kuvaus"
        label-for="input-1"
      >
        <b-form-textarea
          id="input-1"
          v-model="form.description"
          type="textarea"
          placeholder="Syötä kirjan kuvaus"
          required
        ></b-form-textarea>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="Katkelma"
        label-for="input-1"
      >
        <b-form-textarea
          id="input-1"
          v-model="form.excerpt"
          type="textarea"
          placeholder="Syötä katkelma"
          required
        ></b-form-textarea>
      </b-form-group>

    <div class="send-btns">
        <div class="btns"> 
        <b-button v-on:click="goBack()" variant="secondary">Peruuta</b-button>
        </div>
        <div class="btns"> 
        <b-button type="reset" variant="danger">Tyhjennä</b-button>
        </div>
        <div class="btns">
        <b-button type="submit" variant="primary">Lähetä</b-button>
        </div>
    </div>
    </b-form>
  </div>
</template>

<script>
import BookService from './../../services/BookService';
export default {
    name:"AddBookForm",
    props: {
        formData: Object
    },
    data() {
        return {
            form: {
              id: 0,
              title: "",
              description: "",
              pageCount: 0,
              excerpt: "",
              publishDate: ""
            }
        }
    },
    computed: {
    },
    methods: {
        goBack() {
          this.$router.go(-1);
        },
        
        onSubmit() {
            this.form.publishDate = new Date(this.form.publishDate);
            
          BookService.addBook(this.form)
          .then((response) => {
            this.$store.dispatch("addBookToStore", response).then(() => {
              this.$router.go(-1);
            });
          })
          .catch((error) => {
            console.error("Error while committing getbooks: " + error);
            alert(error);
          });
            
        },
        onReset() {
            this.form = {
                location: "",
                date: "",
                starts: []
            };
        }
    }
    
};
</script>

<style>
.form-style {
    width: 50%;
    margin-left: 30%;
}

.btns {
    padding: 10px;
}

.send-btns {
    display: inline-flex;
}
</style>