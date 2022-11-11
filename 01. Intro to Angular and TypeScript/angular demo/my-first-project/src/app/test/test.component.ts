import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TestComponent implements OnInit {

  @Input() users!: { name: string }[];

  constructor(private cdRef: ChangeDetectorRef) {
    this.cdRef.detach();

  }

  ngOnInit(): void {
    this.cdRef.detectChanges();
  }

}

class Wallet {
  constructor(private amount: number) {  }
}

class Person {
  constructor(private wallet: Wallet) {  }
}

const w  = new Wallet(200);
const p = new Person (w);
