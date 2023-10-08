import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavbarServviceService {
  public aboutUsBSubject = new BehaviorSubject(false);
  public researchBSubject = new BehaviorSubject(false);
  public brokerageBSubject = new BehaviorSubject(false);
  public investmentsBSubject = new BehaviorSubject(false);
  public investmentBankingBSubject = new BehaviorSubject(false);
  public mediaBSubject = new BehaviorSubject(false);
  public clientLogInBSubject = new BehaviorSubject(false);

  constructor() {}

  // about
  onShowAbout() {
    this.aboutUsBSubject.next(true);
  }
  onHideAbout(): void {
    this.aboutUsBSubject.next(false);
  }

  // research
  onShowresearch(): void {
    this.researchBSubject.next(true);
  }
  onHideresearch(): void {
    this.researchBSubject.next(false);
  }

  // brokerage
  onShowbrokerage(): void {
    this.brokerageBSubject.next(true);
  }
  onHidebrokerage(): void {
    this.brokerageBSubject.next(false);
  }

  // investments
  onShowinvestments(): void {
    this.investmentsBSubject.next(true);
  }
  onHideinvestments(): void {
    this.investmentsBSubject.next(false);
  }

  // investmentBanking
  onShowinvestmentBanking(): void {
    this.investmentBankingBSubject.next(true);
  }
  onHideinvestmentBanking(): void {
    this.investmentBankingBSubject.next(false);
  }

  // media
  onShowmedia(): void {
    this.mediaBSubject.next(true);
  }
  onHidemedia(): void {
    this.mediaBSubject.next(false);
  }

  // clientLogIn
  onShowclientLogIn(): void {
    this.clientLogInBSubject.next(true);
  }
  onHideclientLogIn(): void {
    this.clientLogInBSubject.next(false);
  }
}
