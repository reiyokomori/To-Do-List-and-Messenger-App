'use strict'

const Job = use('App/Models/Job');
const AuthorizationService = use('App/Services/AuthorizationService');

class JobController {
    async home() {
        // Fetch a job
        //const jobs = await Job.all();
        return await Job.all();
    }
    async userIndex({auth}) {
        const user = await auth.getUser();
        return await user.jobs().fetch();
    }

    async goLink({view}) {
        const job = request.all();
        return view.render(job.link)
    }
    async create({auth, request}) {
        const user = await auth.getUser();
        const { description } = request.all();
        const myjobs = new Job();
        myjobs.fill({
        description,
        });
        await user.jobs().save(myjobs);
        return myjobs; 
    }

    async destroy({auth, request, params}) {
        const user = await auth.getUser();
        const { id } = params;
        const job = await Job.find(id);
        AuthorizationService.verifyPermission(job, user);
        await job.delete();
    }

    async edit({ params, view }) {
        const job = await Job.find(params.id);
        return view.render('edit', { job: job });
    }

    async update ({auth, request, params  }) {
        const user = await auth.getUser();
        const { id } = params;
        const job = await Job.find(id);
        AuthorizationService.verifyPermission(job, user);
        job.merge(request.only('description'));
        await job.save();
        return job;
    }
}

module.exports = JobController