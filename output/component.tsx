import { Component } from "@angular/core";

@Component({
  selector: "my-component",
  template: `
    <div>
      <input
        class="input"
        [value]="name"
        (input)="name = $event.target.value"
      />

      Hello! I can run in React, Vue, Solid, or Liquid!
    </div>
  `,
  styles: [
    `
      .input {
        color: red;
      }
    `,
  ],
})
export default class MyComponent {
  name = "Alex";
}

