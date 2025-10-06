import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-service-proposals',
  imports: [CommonModule],
  templateUrl: './service-proposals.component.html',
  styleUrl: './service-proposals.component.scss',
})
export class ServiceProposalsComponent {
  proposals = [
    {
      freelancerName: 'John Doe',
      price: 350,
      status: 'Pending',
      description:
        'I have 5 years of experience designing modern websites. I will deliver within 7 days.',
    },
    {
      freelancerName: 'Sarah Ali',
      price: 420,
      status: 'Accepted',
      description:
        'Professional UI/UX designer with a focus on clean, responsive layouts. Delivery in 5 days.',
    },
    {
      freelancerName: 'Michael Chen',
      price: 300,
      status: 'Pending',
      description:
        'I can redesign your site with a mobile-first approach using TailwindCSS and Figma.',
    },
    {
      freelancerName: 'Amina Khaled',
      price: 500,
      status: 'Rejected',
      description:
        'Experienced web designer with a portfolio of 30+ completed projects for startups.',
    },
  ];
}
