import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  imports: [RouterModule, CommonModule, ReactiveFormsModule],
  templateUrl: './shopping-cart.html',
  styleUrl: './shopping-cart.css',
})
export class ShoppingCart implements OnInit {

  cartForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.cartForm = this.fb.group({
      items: this.fb.array([
        this.createItem('Fresh Strawberries', 36, 'assets/images/item-cart-04.jpg'),
        this.createItem('Lightweight Jacket', 16, 'assets/images/item-cart-05.jpg'),
      ])
    });
  }

  createItem(name: string, price: number, img: string): FormGroup {
    return this.fb.group({
      name: [name],
      price: [price],
      quantity: [1],
      total: [price],
      img: [img]
    });
  }

  get items(): FormArray {
    return this.cartForm.get('items') as FormArray;
  }

  increase(i: number) {
    const item = this.items.at(i);
    const qty = item.get('quantity')!.value + 1;
    item.patchValue({ quantity: qty, total: qty * item.get('price')!.value });
  }

  decrease(i: number) {
    const item = this.items.at(i);
    const qty = item.get('quantity')!.value;
    if (qty > 1) {
      item.patchValue({ quantity: qty - 1, total: (qty - 1) * item.get('price')!.value });
    }
  }

  onQuantityChange(i: number) {
    const item = this.items.at(i);
    const qty = item.get('quantity')!.value;
    item.patchValue({ total: qty * item.get('price')!.value });
  }

  removeItem(i: number) {
    this.items.removeAt(i);
  }

  get grandTotal() {
    return this.items.controls.reduce((sum, item) => sum + item.get('total')!.value, 0);
  }
  get itemControls(): FormGroup[] {
    return this.items.controls as FormGroup[];
  }
}
