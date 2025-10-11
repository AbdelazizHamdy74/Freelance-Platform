import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProposalService {
  private url = 'http://127.0.0.1:3000/proposals';

  constructor(private http: HttpClient) {}

  create(proposal: any) {
    return this.http.post(this.url + 'create', proposal);
  }

  getProposalsByServiceId(id: any) {
    return this.http.get(this.url + 'service/' + id);
  }

  getProposalByUserId(id: any) {
    return this.http.get(this.url + 'myProposals/' + id);
  }

  acceptProposal(id: any) {
    return this.http.put(this.url + 'accept/' + id, {});
  }

  deleteOneProposal(id: any) {
    return this.http.delete(this.url + id);
  }
}
