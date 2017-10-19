import { Component, OnInit } from '@angular/core';
import { FunctionTestService } from '../../services/function-test.service';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {

    public testString = 'A String';

  constructor(private testService: FunctionTestService) { }

  ngOnInit() {
      this.testService.getTestString().subscribe((response) => { this.testString = response.json(); });
  }

}
