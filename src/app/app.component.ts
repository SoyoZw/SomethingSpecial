
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PasswordGateComponent } from './password-gate.component/password-gate.component';

interface Memory {
  image: string;
  caption: string;
  date: string;
}

interface Reason {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    PasswordGateComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  isUnlocked = false;
  showLetter = false;

  memories: Memory[] = [
    {
      image: 'assets/images/us-1.jpg',
      caption: 'One of my favourite smiles',
      date: 'A moment I wish I could relive'
    },
    {
      image: 'assets/images/us-2.jpg',
      caption: 'Just the two of us',
      date: 'A memory worth keeping'
    },
    {
      image: 'assets/images/us-3.jpg',
      caption: 'The little things',
      date: 'One of those beautiful moments'
    },
    {
      image: 'assets/images/us-4.jpg',
      caption: 'A picture, a thousand memories',
      date: 'Forever a special memory'
    }
  ];

  reasons: Reason[] = [
    {
      icon: '♡',
      title: 'Your beautiful smile',
      description:
        'I hope you never forget how beautiful your smile is. It is one of those little things that has always had a special way of making my day.'
    },
    {
      icon: '✧',
      title: 'The person you are',
      description:
        'I admire so much about you. Your personality, your individuality and all the little things that make you who you are.'
    },
    {
      icon: '♥',
      title: 'Our little moments',
      description:
        'The random conversations, the laughter, the jokes and even the ordinary days. Sometimes those are the memories that mean the most.'
    },
    {
      icon: '🌷',
      title: 'Your beautiful heart',
      description:
        'I appreciate the love, care and kindness you have shown me. I hope you always recognise just how valuable you are.'
    }
  ];

  lessons = [
    {
      number: '01',
      title: 'Listening matters',
      description:
        'Understanding someone means more than simply hearing their words. It means making the effort to understand their feelings too.'
    },
    {
      number: '02',
      title: 'Love requires effort',
      description:
        'Love is not only about what we say. It is about consistency, patience, consideration and the little things we do every day.'
    },
    {
      number: '03',
      title: 'Growth takes action',
      description:
        'Recognising where things went wrong is important, but real growth comes from taking responsibility and doing better.'
    }
  ];

  scrollTo(section: string): void {
    document.getElementById(section)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  revealLetter(): void {
    this.showLetter = !this.showLetter;
  }
}
