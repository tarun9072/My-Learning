import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { KeyDetailsComponent } from './key-details.component';

@NgModule({
  declarations: [KeyDetailsComponent],
  imports: [CommonModule, FormsModule],
  exports: [KeyDetailsComponent],
})
export class KeyDetailsModule {}