export default {
    template: `
      <form v-on:submit.prevent="add">
      <div class="border border-gray-600 text-black">
        <input v-model="newAssignment" placeholder="New Assignment" class="p-2">
        <button type="submit" class="border-l p-2 bg-white">add</button>
      </div>
      </form>

    `,
    props: {

        assignments: Array

    },
    data() {
        return {
            newAssignment: ''
        }
    },
    methods: {
        add() {
            this.$emit('add',this.newAssignment);

            // this.assignments.push({
            //     name: this.newAssignment,
            //     complete: false,
            //     id: this.assignments.length + 1
            // });
           this.newAssignment= '';
        }
    }
}