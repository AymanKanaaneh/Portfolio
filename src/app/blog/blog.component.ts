import { Component, OnInit } from '@angular/core';
import { Blog } from '../models/blog.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  allBlogs: Blog[] = [
    {
      title: 'Introduction to Web Development',
      content: '  In wuod In wuod In wuod In wuod In wuod In wuod In wuod In wuod In wuod In wuod In wuod In wuod In wuod In wuod In wuod In wuod In wuod In wuod In wuod In wuoday.',
      date: new Date('2023-01-05'),
      imageUrl: 'https://cc-prod.scene7.com/is/image/CCProdAuthor/adobe-firefly-marquee-text-to-image-0-desktop-1000x1000?$pjpeg$&jpegSize=300&wid=1000',
      tags: ['Web Development']
    },
    {
      title: 'Capturing the Essence of Adventure: A Travel Photography Journey',
      content: 'Join me on a visual journey as I share the stories behind my most memorable travel photographs and the incredible experiences that inspired them.',
      date: new Date('2023-02-10'),
      imageUrl: 'https://cc-prod.scene7.com/is/image/CCProdAuthor/adobe-firefly-marquee-text-to-image-0-desktop-1000x1000?$pjpeg$&jpegSize=300&wid=1000',
      tags: ['Travel', 'Photography']
    },
    {
      title: 'Delicious and Nutritious: A Beginner’s Guide to Healthy Cooking',
      content: 'Discover simple and tasty recipes that promote a healthy lifestyle in this cooking adventure. Explore the world of nutritious ingredients and cooking techniques.',
      date: new Date('2023-03-20'),
      imageUrl: 'https://cc-prod.scene7.com/is/image/CCProdAuthor/adobe-firefly-marquee-text-to-image-0-desktop-1000x1000?$pjpeg$&jpegSize=300&wid=1000',
      tags: ['Cooking', 'Healthy Living']
    },
    {
      title: 'Exploring Other Worlds: A Dive into Science Fiction Literature',
      content: 'Embark on a journey through the realms of imagination with this exploration of classic and modern science fiction novels. Dive into captivating stories and visionary ideas.',
      date: new Date('2023-04-15'),
      imageUrl: 'https://cc-prod.scene7.com/is/image/CCProdAuthor/adobe-firefly-marquee-text-to-image-0-desktop-1000x1000?$pjpeg$&jpegSize=300&wid=1000',
      tags: ['Books', 'Science Fiction']
    },
    {
      title: 'Unlocking Your Fitness Potential: Tips for a Healthier Lifestyle',
      content: 'Get motivated and achieve your fitness goals with these practical tips and insights. Learn about effective workout routines, nutrition, and overall well-being.',
      date: new Date('2023-05-12'),
      imageUrl: 'https://cc-prod.scene7.com/is/image/CCProdAuthor/adobe-firefly-marquee-text-to-image-0-desktop-1000x1000?$pjpeg$&jpegSize=300&wid=1000',
      tags: ['Fitness', 'Health']
    }
    // Add more blog posts as needed
  ];

  blogs: Blog[] = [...this.allBlogs];
  searchTerm: string = '';
  selectedTag: string = '';

  constructor() { }

  ngOnInit(): void {
    window.scroll(0,0);
  }

  filterBlogs(): void {
    this.blogs = this.allBlogs.filter(blog =>
      (blog.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      blog.content.toLowerCase().includes(this.searchTerm.toLowerCase())) &&
      (this.selectedTag === '' || blog.tags.includes(this.selectedTag))
    );
  }

  clearFilter(): void {
    this.searchTerm = '';
    this.selectedTag = '';
    this.blogs = [...this.allBlogs];
  }

  getAllTags(): string[] {
    const tags: string[] = [];
    this.allBlogs.forEach(blog => {
      tags.push(...blog.tags);
    });
    return Array.from(new Set(tags)); // Get unique tags
  }

  blogClicked(blog: Blog){
    alert('Under Construction !!!');
  }
}
