   export default {
      template :`
                     <li>
                         <label class="p-2">{{assignment.name}}</label>
                          <input type="checkbox" v-model="assignment.complete" class="ml-3">
                        </li>
      `,

       props:{
           assignment:Object
       }

   }