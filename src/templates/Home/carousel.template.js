const template = `
    <section class='carousel'>
        <ul>
            {{#each this}}
                <li>{{this.title}}</li>
                <p>{{this.description}}</p>
                <p>{{this.source.name}}</p>
            {{/each}}
        </ul>
    </section>
`;

export default window.Handlebars.compile(template);