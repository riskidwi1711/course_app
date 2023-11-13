import React from "react";

export default function VideoCard() {
    return (
        <div class="owl-item active">
            <div class="item">
                <div class="fcrse_1 mb-20">
                    <a href="course_detail_view.html" class="fcrse_img">
                        <img
                            src="/assets/dashboard/images/courses/img-1.jpg"
                            alt=""
                        />
                    </a>
                    <div class="fcrse_content">
                        <a href="course_detail_view.html" class="crse14s">
                            Complete Python Bootcamp: Go from zero to hero in
                            Python 3
                        </a>

                        <div className="d-flex gap-1 justify-content-end">
                            <button className="btn btn-outline-danger">
                                <i className="fas fa-trash me-2"></i>Hapus
                            </button>
                            <button className="btn btn-outline-primary">
                                <i className="fas fa-play me-2"></i>Putar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
