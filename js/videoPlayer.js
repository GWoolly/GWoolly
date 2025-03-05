document.addEventListener('DOMContentLoaded', function() {
    var videoPreviews = document.querySelectorAll('.video-preview');
  
    videoPreviews.forEach(function(preview) {
        // Click to play video
        preview.addEventListener('click', function() {
            var overlay = this.querySelector('.video-preview-overlay');
            var video = this.querySelector('video');
            
            overlay.style.display = 'none';
            video.style.display = 'block';
            video.play();
        });

        // Modal close event to reset video
        var modal = preview.closest('.portfolio-modal');
        if (modal) {
            modal.addEventListener('hidden.bs.modal', function() {
                var overlay = preview.querySelector('.video-preview-overlay');
                var video = preview.querySelector('video');
                
                if (video) {
                    video.pause();
                    video.currentTime = 0;
                    
                    // Revert to thumbnail
                    overlay.style.display = 'block';
                    video.style.display = 'none';
                }
            });
        }
    });
});

// Keeping the existing jQuery and fallback methods for broader compatibility
$(document).ready(function() {
    $('.portfolio-modal').on('hidden.bs.modal', function (e) {
        var video = $(this).find('video');
        var overlay = $(this).find('.video-preview-overlay');
        
        if (video.length) {
            video[0].pause();
            video[0].currentTime = 0;
            
            // Revert to thumbnail
            overlay.show();
            video.hide();
        }
    });
});