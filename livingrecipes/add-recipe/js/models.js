let People = function(fname, lname, department, city, title, website, image){
    this.firstName = fname,
    this.lastName = lname,
    this.department = department,
    this.city = city,
    this.title = title,
    this.website = website,
    this.profileImage = image,
    this.projects = [],
    this.addProjects = function(project){
        this.projects.push(project);
    }
}

const people = {
    fname: {
        text: "",
        required: true
    },
    lname: {
        text: "",
        required: true
    },
    location: {
        text: "",
        required: true
    },
    title: {
        text: "",
        required: true
    }
}

let Project = function(name, type, year, location, city, state, description, link, imageUrl) {
    this.name = name,
    this.type = type,
    this.year = year,
    this.location = location,
    this.city = city,
    this.state = state,
    this.description = description,
    this.link = link,
    this.imageUrl = imageUrl
}