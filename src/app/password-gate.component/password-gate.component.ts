
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-password-gate',
  standalone: true,
  templateUrl: './password-gate.component.html',
  styleUrl: './password-gate.component.css'
})
export class PasswordGateComponent {

  @Output() unlocked = new EventEmitter<void>();

  // Replace this with your generated SHA-256 hash.
  private readonly passwordHash =
    '6f322b4a44eefb51b921c586be06536cabdd685ee83495a5bae60a02651d5b01';

  errorMessage = '';
  isChecking = false;

  async unlock(password: string): Promise<void> {

    this.errorMessage = '';

    if (!password.trim()) {
      this.errorMessage = 'Please enter our little secret. ♡';
      return;
    }

    this.isChecking = true;

    try {

      const encoder = new TextEncoder();

      const passwordData = encoder.encode(password);

      const hashBuffer = await crypto.subtle.digest(
        'SHA-256',
        passwordData
      );

      const hashArray = Array.from(
        new Uint8Array(hashBuffer)
      );

      const enteredHash = hashArray
        .map(byte => byte.toString(16).padStart(2, '0'))
        .join('');

      if (enteredHash === this.passwordHash.toLowerCase()) {
        this.unlocked.emit();
      } else {
        this.errorMessage =
          "That's not quite right, Baby. Try again. ♡";
      }

    } catch (error) {

      console.error('Password verification failed:', error);

      this.errorMessage =
        'Something went wrong. Please try again.';

    } finally {
      this.isChecking = false;
    }
  }
}
