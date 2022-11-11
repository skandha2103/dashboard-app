import { Component, Directive, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

@Directive({
  selector:'base-dir'
})

export abstract class BaseComponent implements OnInit, OnDestroy {

  protected destroyed$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  // abstract userId: number;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}
