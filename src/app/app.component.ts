import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private meta: Meta, private title: Title, private route: ActivatedRoute) {
    console.log('Called Constructor');
    this.route.queryParams.subscribe(params => {
      if (params['id'] == '1') {
        this.title.setTitle(params['id']);
        this.meta.addTag({ property: 'og:type', content: 'website' });
        this.meta.addTag({ property: 'og:title', content: 'Fiesta del libro' });
        this.meta.addTag({ property: 'og:description', content: 'Aqui va la descripción' });
        this.meta.addTag({ property: 'og:url', content: 'https://www.sciencefriday.com/' });
        this.meta.addTag({ property: 'og:site_name', content: 'Fiesta' });
        this.meta.addTag({ property: 'og:image', content: 'https://www.sciencefriday.com/wp-content/uploads/2016/01/Science-Friday-logo.png' });
        this.meta.addTag({ property: 'og:image:secure_url', content: 'https://www.sciencefriday.com/wp-content/uploads/2016/01/Science-Friday-logo.png' });


        this.meta.addTag({ name: 'twitter:card', content: 'summary' });
        this.meta.addTag({ name: 'twitter:description', content: 'Esta es la descripción' });
        this.meta.addTag({ name: 'twitter:title', content: '1' });
        this.meta.addTag({ name: 'twitter:image', content: 'http://www.sciencefriday.com/wp-content/uploads/2015/10/SciFri_avatar_1400x-1.png' });
      } else if (params['id'] == '2') {
        this.title.setTitle(params['id']);
        this.meta.addTag({ name: 'twitter:card', content: '“summary_large_image' });
        this.meta.addTag({ name: 'twitter:description', content: 'Esta es la descripción' });
        this.meta.addTag({ name: 'twitter:title', content: '2' });
        this.meta.addTag({ name: 'twitter:image', content: '' });
      } else if (!params['id']) {
        this.title.setTitle('Not param');
        this.meta.addTag({ name: 'twitter:card', content: 'summary' });
        this.meta.addTag({ name: 'twitter:description', content: 'Esta es la descripción' });
        this.meta.addTag({ name: 'twitter:title', content: '1' });
        this.meta.addTag({ name: 'twitter:image', content: 'https://lh3.googleusercontent.com/proxy/CHm785dcjwwCs-EKT2kKeVcRhAz9lV4wC6RxJLd0S7b83INmWyhv5oHvFFmMm1PkGZjXVjK5ein4-_NGM3nkCgGj75px4uNwyr0oiLEh3L8BIg' });
        //this.meta.addTag({ name: '', content: '' });
      }
    });

  }
}

